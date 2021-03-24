import { SaveToDB, EndpointPayload } from "./interface/payload";

const SaveConsent = async request => {
    
    const timestamp = new Date().toISOString();
    let json: EndpointPayload = await request.json()
    const key = json.id;
    delete json.id
    let newjson: SaveToDB = json;
    let requestHeaders = JSON.stringify([...request.headers])
    const IP = request.headers.get('x-real-ip')
    const user_ip = IP.replace(/\d*$/, '0')
    newjson = {...newjson, IP: user_ip} 
    const json2 = JSON.stringify(newjson)  
    
    const consentsString = Object.entries(newjson.consents)
  .reduce<string[]>((acceptedKeys, [consentKey, value]) => {
    if (value) acceptedKeys.push(consentKey);
    return acceptedKeys;
  }, [])
  .join(',');
    
  const recordValue = [newjson.action, user_ip, timestamp, newjson.url, newjson.userAgent, consentsString, newjson.bannerText].join(';');

     await CONSENTS.put(key, recordValue)

     const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json;charset=UTF-8'
    }

     const result = {
        status: "success",
        statusCode: 200,
        message: "ok"
    }
    return new Response(recordValue, {status: 200, headers})
    

   // return new Response(JSON.stringify(result), { corHeaders })
}

export default SaveConsent
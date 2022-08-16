import md5 from 'md5';

const publickey = '53049753204b6dc4157a9e4e02921ef6';
const  privatekey = 'aa67cee82eccabf9abd26b56abe7128a94246da2';

const time = Number(new Date());
const hash = md5(time+privatekey+publickey);

const loadCharacter = async ({ characterId }, { signal }) => {
    const response = await fetch('https://gateway.marvel.com:443/v1/public/comics?ts='+time+'&apikey='+publickey+'&hash='+hash);
    if (!response.ok) throw new Error(response.statusText){
      return response.json();
    }
}

export class DataJson {
    
    
}

//export default DataJson;
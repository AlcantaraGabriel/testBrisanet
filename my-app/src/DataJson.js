import md5 from 'md5';

const publickey = '53049753204b6dc4157a9e4e02921ef6';
const  privatekey = 'aa67cee82eccabf9abd26b56abe7128a94246da2';

const time = Number(new Date());
const hash = md5(time+privatekey+publickey);

export class DataJson {
    async componentDidMount() {
        const headers = {'Content-Type': 'application/json'};
        const response = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts='+time+'&apikey='+publickey+'&hash='+hash, {headers});
        const dataJson = await response.json();
        //this.setState({items: dataJson.data})
        console.debug(dataJson.data.results);
        return dataJson.data.results;
        //this.setState({items: dataJson.data.results)});
        //alert(data);
    }
    
}

//export default DataJson;
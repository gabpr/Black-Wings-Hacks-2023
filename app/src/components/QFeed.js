function QFeed() {
    const [keys, setKeys] = useState([]);  
    const [message, setMessage] = useState({});
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const json = await response.json();
        setMessage(json.message);
        setKeys(Object.keys(json.message).slice(0, 3));
      }
      fetchData();
    }, []);
  
    return (
      <div>
        <div class="mt-3 text-primary">Question Feed</div>
        {keys.map((key, index) => (
          <div key={index}>
            <div class="qfeed">{key}: {message[key]}</div>
          </div>
        ))}
      </div>
    );
  }

  export default QFeed;
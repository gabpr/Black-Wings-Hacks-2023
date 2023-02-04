function QBox() {
    const [inputValue, setInputValue] = useState("");
  
    return (
      <div>
        <div class="text-primary mt-2">Ask a Question</div>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(event) => setInputValue(event.target.value)} 
        />
        <p>Input value: {inputValue}</p>
      </div>
    );
  }

  export default QBox;
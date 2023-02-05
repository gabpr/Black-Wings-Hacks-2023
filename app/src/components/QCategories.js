function Qcategories() {
    const [selectedOption, setSelectedOption] = useState("Option 1");
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div class="w-100">
        <label class="w-100 text-primary">Category</label>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
          <option value="Option 5">Option 5</option>
        </select>
      </div>
    );
  }

  export default QCategories;
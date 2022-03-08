import axios from "axios";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import PasswordInput from "./PasswordInput";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import Result from "./Result";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(undefined);

  const debouncedValidate = useCallback(_.debounce((value) => {
    axios.post(
      "https://o9etf82346.execute-api.us-east-1.amazonaws.com/staging/password/strength",
      { password: value }
    ).then((response) => {
      setResult(response.data)
    });

  }, 500), []);

  useEffect(() => {
    if (value.length > 0) {
      debouncedValidate(value);
    }
  }, [value, debouncedValidate])

  return (
    <div className="container">
      <Header />
      <PasswordInput value={value} onChange={setValue} />
      <PasswordStrengthMeter score={result?.score} />
      <Result result={result} />
    </div>
  );
}

export default App;


import Input from './components/Input'
import Button from './components/Button'

import {Container, Content , Row, } from "./styles"
import { useState } from 'react'

const  App = () => {

  const [currentNumber, setCurrentNumber ]= useState("0")
  const [firstNumber , setFirstNumber] = useState("0");
  const [operation, setOperation] = useState('');
  
  const handleClear = ()=>{
    setCurrentNumber("0")
    setFirstNumber('0')
    setOperation('')

  }

  const handleAddNumber = (num) =>{
 
    setCurrentNumber( prev => `${prev ==='0' ? '' : prev}${num}`)
  }
  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      // Se firstNumber é '0', definimos firstNumber como currentNumber
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('+')
    } else {
      // Caso contrário, somamos firstNumber e currentNumber
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
      
    }
  };
  const handleRemNumbers = () => {
    if (firstNumber === '0') {
      // Se firstNumber é '0', definimos firstNumber como currentNumber
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('-')
    } else {
      // Caso contrário, somamos firstNumber e currentNumber
      const rem = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setOperation('')
      
    }
  };
  const handleTimesNumbers = () => {
    if (firstNumber === '0') {
      // Se firstNumber é '0', definimos firstNumber como currentNumber
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('*')
    } else {
      // Caso contrário, somamos firstNumber e currentNumber
      const times = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(times));
      setOperation('')
      
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      // Se firstNumber é '0', definimos firstNumber como currentNumber
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('/')
    } else {
      // Caso contrário, somamos firstNumber e currentNumber
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('')
      
    }
  };

  const handleEquals = () => {
    if (!firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      // Se firstNumber é '0', definimos firstNumber como currentNumber
      
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleRemNumbers();
          break;
        case '*':
          handleTimesNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;

        default: break
      }
    } 
  };

  return (
    <>
      <Container>
        <Content>
            <Input value={currentNumber}/>
        
            <Row>
              <Button label="ce" onClick={()=> handleClear()}/>
              <Button label="/"  onClick={()=> handleDivNumbers('/')}/>
              <Button label="x"  onClick={()=> handleTimesNumbers('*')}/>
              <Button label="."  onClick={()=> handleAddNumber('.')}/>


            </Row>
            <Row>
              <Button label="7"  onClick={()=> handleAddNumber('7')}/>
              <Button label="8"  onClick={()=> handleAddNumber('8')}/>
              <Button label="9"  onClick={()=> handleAddNumber('9')}/>
              <Button label="-"  onClick={()=> handleRemNumbers('-')}/>

            </Row>
            <Row>
              <Button label="4"  onClick={()=> handleAddNumber('4')}/>
              <Button label="5"  onClick={()=> handleAddNumber('5')}/>
              <Button label="6"  onClick={()=> handleAddNumber('6')}/>
              <Button label="+"  onClick={handleSumNumbers}/>

            </Row>
            <Row>
              <Button label="1"  onClick={()=> handleAddNumber('1')}/>
              <Button label="2"  onClick={()=> handleAddNumber('2')}/>
              <Button label="3"  onClick={()=> handleAddNumber('3')}/>

              <Button label="0"  onClick={()=> handleAddNumber('0')}/>
            </Row>
            <Row>
              <Button label="="  onClick={handleEquals}/>
            </Row>
        </Content>
   
       

      </Container>
    </>
  );
}

export default App;


import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ActionKeys } from '../enums/action-keys.enum';

describe('CalculatorModel', (): void => {

  let calculator: ICalculatorModel;

  beforeEach((): void => {
    calculator = new CalculatorModel();
  });

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {
    expect(calculator).toBeDefined();

  });

  it('should have an empty display on init', (): void => {
    // Act
    const displayValue: string = calculator.display();
  
    // Assert
    expect(displayValue).toEqual('');
  
  });

  it('should display `1` when the `1` key is pressed', (): void => {
    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();
  
    // Assert
    expect(displayValue).toEqual('1');
  
  });

  it('should display `2` when the `2` key is pressed', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2');
  
  });

  it('should display `98` when the `9` key is pressed followed by the `8` key', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('98');
  
  });

  it('should display `9+9` when keys are pressed in the order `9`, `+`, `8`', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressOperatorKey(OperatorKeys.PLUS)
    calculator.pressNumericKey(NumericKeys.EIGHT);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('9+8');
  
  });

  it('should display `17` when keys are pressed in the order `9`, `+`, `0` `=`', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressOperatorKey(OperatorKeys.PLUS)
    calculator.pressNumericKey(NumericKeys.ZERO);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('9');
  
  });

  it('should display `10` when keys are pressed in the order `2`, `*`, `1` `=`', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MULT)
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2');
  
  });

});

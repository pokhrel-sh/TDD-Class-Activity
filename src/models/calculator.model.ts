
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._buffer += " " + key + " ";
  }

  public pressActionKey(key: ActionKeys): void {
    this._buffer += key;
  }

  public display(): string {
    if (this._buffer.includes('=')) {
      let splitted: string[] = this._buffer.split(" ")
      let rolling_total: number = 0;
      let queued_operation: string = "";
      for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] == "+") {
          queued_operation = "+";
        } 
        else if (splitted[i] == "-") {
          queued_operation = "-";
        }
        else if (splitted[i] == "/") {
          queued_operation = "/";
        }
        else if (splitted[i] == "*") {
          queued_operation = "*";
        } 
        else if (splitted[i] == "=") {
          break;
        }
        else {
          if (queued_operation == "+") {
            rolling_total = rolling_total;
          } 
          else if (queued_operation == "-") {
            rolling_total = rolling_total;
          }
          else if (queued_operation == "/") {
            rolling_total = rolling_total;
          }
          else if (queued_operation == "*") {
            rolling_total = rolling_total;
          }
          else if (queued_operation == "") {
            rolling_total = Number(splitted[i])
          }
          queued_operation = "";
        }
      }
      return String(rolling_total);
    }

    return this._buffer.replace(/\s/g, "");
  } 
}
import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Web3Service} from '../_services/_web3/web3.service';

@Directive({
  selector: '[invalidEthAddress]',
  providers: [{provide: NG_VALIDATORS, useExisting: EthAddressValidatorDirective, multi: true}]
})
export class EthAddressValidatorDirective implements Validator {
  constructor(private web3Svc: Web3Service) {
  }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.web3Svc.isAddress(control.value) ? null : {'invalidEthAddress': {value: control.value}};
  }
}

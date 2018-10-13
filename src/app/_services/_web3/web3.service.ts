import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as Web3 from 'web3';
import * as bs58 from 'bs58';
import { Buffer } from 'buffer';

declare var window: any;

@Injectable()
export class Web3Service {
  public web3: Web3;

  checkAndInstantiateWeb3 = () => {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // tslint:disable-next-line:max-line-length
      console.warn('Using web3 detected from external source. If you find that your accounts don\'t appear or you have 0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask');
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      // tslint:disable-next-line:max-line-length
      console.warn('No web3 detected. Falling back to ${environment.HttpProvider}. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask');
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(
        new Web3.providers.HttpProvider(environment.HttpProvider)
      );
    }
  }

  constructor() {
    // this.checkAndInstantiateWeb3();
  }

  currentProvider() {
    return this.web3.currentProvider;
  }

  toHex(value: string): string {
    return this.web3.toHex(value);
  }

  toString(hex: string): string {
    return this.web3.toUtf8(hex);
  }

  toNumber(hex: string): string {
    return this.web3.toDecimal(hex);
  }

  toWei(amount: string): string {
    return this.web3.toWei(amount, 'ether');
  }

  fromWei(amount: any): any {
    return this.web3.fromWei(amount, 'ether');
  }

  isAddress(ethAddress: string): boolean {
    if (this.web3) {
      return this.web3.isAddress(ethAddress);
    }
    return false;
  }

  getBytes32FromMultiash(multihash) {
    const decoded = bs58.decode(multihash);
    return {
      digest: `0x${decoded.slice(2).toString('hex')}`,
      hashFunction: decoded[0],
      size: decoded[1],
    };
  }
}

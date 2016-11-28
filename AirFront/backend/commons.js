export function Customer(){
    this.customerId='';
    this.customerName='';
    this.customerPhone='';
    this.customerWechat='';
    this.customerAddress='';
    this.createAt='';
    this.upper={customerId:'',customerName:'',customerPhone:''};
}
export function CustomerPoint(){
    this.customerId='';
    this.point='';
    this.description='';
    this.gain='';
}

export const ctx='http://localhost:8080';
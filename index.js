
const TAX_RATE_EDGE_1 = 0.05;
const TAX_RATE_EDGE_2 = 0.15;
const TAX_RATE_EDGE_3 = 0.25;
const TAX_RATE_EDGE_4 = 0.30;

const LIMIT_4 = 500000000;
const LIMIT_3 = 250000000;
const LIMIT_2 = 50000000;


module.exports = function(income){

  let edge_1 = 0, edge_2 = 0, edge_3 = 0, edge_4 = 0;

  if(income <= LIMIT_2){
    edge_1 = income;
  }else if (income <= LIMIT_3) {
    edge_1 = LIMIT_2;
    edge_2 = income - LIMIT_2;
  }else if (income <= LIMIT_4) {
    edge_1 = LIMIT_2;
    edge_2 = LIMIT_3 - LIMIT_2;
    edge_3 = income - LIMIT_3;
  }else {
    edge_1 = LIMIT_2;
    edge_2 = LIMIT_3 - LIMIT_2;
    edge_3 = LIMIT_4 - LIMIT_3;
    edge_4 = income - LIMIT_4;
  }

  let taxe = edge_4*TAX_RATE_EDGE_4 + edge_3*TAX_RATE_EDGE_3 + edge_2*TAX_RATE_EDGE_2 + edge_1*TAX_RATE_EDGE_1;

  return taxe;
}

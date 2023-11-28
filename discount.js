const first20 = 50;
const second50 = 30;
const others = 20;

function ticketPrice(ticketCount) {
  if (ticketCount <= 20) {
    const Price = first20 * ticketCount;
    return Price;
  } else if (ticketCount <= 50) {
    const firstTicket = first20 * 20;
    const restTicket = ticketCount - 20;
    const restTicketPrice = restTicket * second50;
    const totalPrice = firstTicket + restTicketPrice;
    return totalPrice;
  } else {
    const first20Price = first20 * 20;
    const second50Price = second50 * 30;
    const restTicket = ticketCount - 50;
    const restTicketPrice = restTicket * others;
    const totalPrice = first20Price + second50Price + restTicketPrice;
    return totalPrice;
  }
}
const result = ticketPrice(52);
console.log(result);

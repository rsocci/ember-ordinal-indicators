const { floor } = Math;

export default function (number) {
  if (floor(number / 10) === 1) {
    return 'th';
  } else if (number % 10 === 1) {
    return 'st';
  } else if (number % 10 === 2) {
    return 'nd';
  } else if (number % 10 === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

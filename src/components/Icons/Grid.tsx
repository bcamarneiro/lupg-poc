export function Grid({ inverted }: { inverted?: boolean }) {
  const color = inverted ? '#000' : '#A1A1A1';

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.17188 7.4375H1.39062C1.05496 7.4375 0.733044 7.30416 0.495693 7.06681C0.258342 6.82946 0.125 6.50754 0.125 6.17188V1.39062C0.125 1.05496 0.258342 0.733044 0.495693 0.495693C0.733044 0.258342 1.05496 0.125 1.39062 0.125H6.17188C6.50754 0.125 6.82946 0.258342 7.06681 0.495693C7.30416 0.733044 7.4375 1.05496 7.4375 1.39062V6.17188C7.4375 6.50754 7.30416 6.82946 7.06681 7.06681C6.82946 7.30416 6.50754 7.4375 6.17188 7.4375Z"
        fill={color}
      />
      <path
        d="M14.6094 7.4375H9.82812C9.49246 7.4375 9.17054 7.30416 8.93319 7.06681C8.69584 6.82946 8.5625 6.50754 8.5625 6.17188V1.39062C8.5625 1.05496 8.69584 0.733044 8.93319 0.495693C9.17054 0.258342 9.49246 0.125 9.82812 0.125H14.6094C14.945 0.125 15.267 0.258342 15.5043 0.495693C15.7417 0.733044 15.875 1.05496 15.875 1.39062V6.17188C15.875 6.50754 15.7417 6.82946 15.5043 7.06681C15.267 7.30416 14.945 7.4375 14.6094 7.4375Z"
        fill={color}
      />
      <path
        d="M6.17188 15.875H1.39062C1.05496 15.875 0.733044 15.7417 0.495693 15.5043C0.258342 15.267 0.125 14.945 0.125 14.6094V9.82812C0.125 9.49246 0.258342 9.17054 0.495693 8.93319C0.733044 8.69584 1.05496 8.5625 1.39062 8.5625H6.17188C6.50754 8.5625 6.82946 8.69584 7.06681 8.93319C7.30416 9.17054 7.4375 9.49246 7.4375 9.82812V14.6094C7.4375 14.945 7.30416 15.267 7.06681 15.5043C6.82946 15.7417 6.50754 15.875 6.17188 15.875Z"
        fill={color}
      />
      <path
        d="M14.6094 15.875H9.82812C9.49246 15.875 9.17054 15.7417 8.93319 15.5043C8.69584 15.267 8.5625 14.945 8.5625 14.6094V9.82812C8.5625 9.49246 8.69584 9.17054 8.93319 8.93319C9.17054 8.69584 9.49246 8.5625 9.82812 8.5625H14.6094C14.945 8.5625 15.267 8.69584 15.5043 8.93319C15.7417 9.17054 15.875 9.49246 15.875 9.82812V14.6094C15.875 14.945 15.7417 15.267 15.5043 15.5043C15.267 15.7417 14.945 15.875 14.6094 15.875Z"
        fill={color}
      />
    </svg>
  );
}

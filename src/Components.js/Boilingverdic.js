export default function ({ celsius = 0 }) {
    if (celsius > 100) {
        return <p>The water would boil</p>;
    }
    return <p>water wolud not boil</p>
}
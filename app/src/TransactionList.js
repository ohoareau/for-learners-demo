function formatAmount(amount, currency) {
    return new Intl.NumberFormat('fr-FR', {style: "currency", currency: currency}).format(amount, {});
}

function TransactionList({transactions}) {
    const date1 = new Date();
    const date2 = new Date();
    date2.setHours(date1.getHours() - 1);
    const date3 = new Date();
    date3.setHours(date1.getHours() - 2);
    const date4 = new Date();
    date4.setHours(date1.getHours() - 3);
    return (
        <table style={{margin: 4, padding: 4, backgroundColor: 'white', color: 'black'}}>
            <tr style={{backgroundColor: 'gray', color: 'white'}}>
                <td>Date</td>
                <td>Montant</td>
                <td>Lieu</td>
                <td>Banque</td>
            </tr>
            {transactions.map((item, index) => (
                <tr style={{backgroundColor: !!(index % 2) ? 'lightgray' : 'white'}}>
                    <td style={{padding:8}}>{new Date(item.date).toISOString()}</td>
                    <td style={{padding: '8px 16px 8px 8px', textAlign: 'right'}}>{formatAmount(item.amount, item.currency)}</td>
                    <td style={{padding:8}}>{item.location}</td>
                    <td style={{padding:8}}>{item.bank}</td>
                </tr>
            ))}
        </table>
    );
}

export default TransactionList
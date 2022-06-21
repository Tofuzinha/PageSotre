import styles from '../../styles/Order.module.css';
import Image from 'next/image';

const Order = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Order</th>
                        <th>Custumer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <span className={styles.id}>818737819</span>
                        </td>
                        <td>
                            <span className={styles.name}>Midori</span>
                        </td>
                        <td>
                            <span className={styles.address}>web st. 888-00 N/A</span>
                        </td>
                        <td>
                            <span className={styles.total}>$79.00</span>
                        </td>
                    </tr>  
                </table>
            </div>
            <div className={styles.row}>
                <div className={styles.status}>
                    <Image src='/img/paid.png' alt='' width={30} height={30}/>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$79.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$79.00
                    </div>
                    <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
    </div>
  )
}

export default Order;
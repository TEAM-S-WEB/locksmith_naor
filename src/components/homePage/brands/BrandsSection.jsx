import Link from "next/link";
import styles from "./BrandsSection.module.css";

export default function BrandsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>BEST BRANDS</h2>

      <p className={styles.description}>
        We only work with the leading manufacturers in the market.
        <br />
        Our qualified technicians constantly undergo training to learn about
        changes in the security market.
      </p>

      <div className={styles.logos}>
        <img src="https://cdn-ildjbbn.nitrocdn.com/AIHfvcANIZlYCwdBZtkWWVAghkVMspxo/assets/images/optimized/rev-8a0e2f0/mr-locks.com/wp-content/uploads/Mul-T-Lock.jpg" alt="Mul-T-Lock" />
        <img src="https://cdn-ildjbbn.nitrocdn.com/AIHfvcANIZlYCwdBZtkWWVAghkVMspxo/assets/images/optimized/rev-8a0e2f0/mr-locks.com/wp-content/uploads/Schlage.jpg" alt="Schlage" />
        <img src="https://cdn-ildjbbn.nitrocdn.com/AIHfvcANIZlYCwdBZtkWWVAghkVMspxo/assets/images/optimized/rev-8a0e2f0/mr-locks.com/wp-content/uploads/Yale.jpg" alt="Yale" />
        <img src="https://cdn-ildjbbn.nitrocdn.com/AIHfvcANIZlYCwdBZtkWWVAghkVMspxo/assets/images/optimized/rev-8a0e2f0/mr-locks.com/wp-content/uploads/Baldwin.jpg" alt="Baldwin" />
        <img src="https://cdn-ildjbbn.nitrocdn.com/AIHfvcANIZlYCwdBZtkWWVAghkVMspxo/assets/images/optimized/rev-8a0e2f0/mr-locks.com/wp-content/uploads/LATCH.jpg" alt="Latch" />
        <img src="https://cdn-ildjbbn.nitrocdn.com/AIHfvcANIZlYCwdBZtkWWVAghkVMspxo/assets/images/optimized/rev-8a0e2f0/mr-locks.com/wp-content/uploads/Medeco.jpg" alt="Medeco" />
      </div>

      <Link href="/brands" className={styles.link}>
        SEE THE FULL LIST
      </Link>
    </section>
  );
}

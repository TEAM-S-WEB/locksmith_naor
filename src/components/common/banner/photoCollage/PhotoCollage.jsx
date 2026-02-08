import React from 'react';
import styles from './photocollage.module.css';
import Image from 'next/image';
import img_a from '@/images/a.jpg';
import img_b from '@/images/b.jpg';
import img_c from '@/images/c.jpg';
import img_d from '@/images/d.jpg';
import img_f from '@/images/f.jpg';
import img_g from '@/images/g.jpg';


const PhotoCollage = ({ a, b, c, d, f, g, fullscreen = true }) => {
    return (
        <div className={styles.photoCollage}>
            {/* Top row: 3 images */}
            <div className={styles.photoRow}>
                <Image src={a ? a : img_a} alt="collage" width={400} height={400} className={styles.photo} />
                <Image src={b ? b : img_b} alt="collage" width={400} height={400} className={styles.photo} />
                <Image src={c ? c : img_c} alt="collage" width={400} height={400} className={styles.photo} />
            </div>
            {/* Bottom row: 3 images */}
            {fullscreen ?  
            
            <div className={styles.photoRow}>
                <Image src={d ? d : img_d} alt="collage" width={400} height={400} className={styles.photo} />
                <Image src={f ? f : img_f} alt="collage" width={400} height={400} className={styles.photo} />
                <Image src={g ? g : img_g} alt="collage" width={400} height={400} className={styles.photo} />
            </div>
            : null}
        </div>
    );
};

export default PhotoCollage;
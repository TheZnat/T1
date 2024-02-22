import React from "react";
import styles from "./CustomerCard.module.css";

type Props = {
  name?: string;
  text: string;
};

const CustomerCard = ({ name, text}: Props) => {
  
  return (
    <div className={styles.reviews}>
      {name !== undefined && (
        <div className={styles.reviews__customerInfo}>
          <div className={styles.reviews__customerInfo__description}>
            <p className={styles.reviews__customerInfo__description__name}>
              @{name}
            </p>
          </div>
        </div>
      )}
      <p className={styles.reviews__customerInfo__paragraph}>{text}</p>
    </div>
  );
};

export default CustomerCard;

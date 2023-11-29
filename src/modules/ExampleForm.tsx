'use client'
import { RuxButton } from '@astrouxds/react';
import styles from './ExampleForm.module.css';

export default function ExampleForm({stringArg}: {stringArg: string}) {
  return (
    <RuxButton icon="account-box" className={styles.someStyle} onClick={() => console.log('i was clicked.')} >
      {stringArg}
    </RuxButton>
  );
}

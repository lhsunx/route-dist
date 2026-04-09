import React from 'react';
import styles from './Header.module.css';
interface HeaderProps {
  title: string; // 接收一个字符串类型的 title
}
// 使用解构赋值从 props 中取出 title
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      {/* 使用从父组件传来的 title */}
      <h1>{title}</h1>
      <p>分享前端知识和心得</p>
    </header>
  );
};

export default Header;
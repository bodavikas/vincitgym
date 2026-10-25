import React from 'react';
import TextEngine from 'spring-text-engine';

/** Semantic heading whose words rise once when the heading enters view. */
export default function WordRise({ as: Tag = 'h2', children, className = '', ...props }) {
  return (
    <Tag className={`${className} justify-center`.trim()} {...props}>
      <TextEngine
        tag="span"
        mode="once"
        wordOut={{ opacity: 0, y: 28 }}
        wordIn={{ opacity: 1, y: 0 }}
        wordConfig={{ tension: 180, friction: 22 }}
        wordStagger={70}
      >
        {children}
      </TextEngine>
    </Tag>
  );
}

import React from 'react';
declare type Tags = 'h1' | 'h2' | 'h3';
declare type Props = {
    tag: Tags;
    children: React.ReactNode;
    className?: string;
};
declare const Heading: React.FC<Props>;
export default Heading;

import {DOMProps, ViewStyleProps} from '@react-types/shared';
import {filterDOMProps, useStyleProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {ReactNode, RefObject} from 'react';

export interface ContentProps extends DOMProps, ViewStyleProps {
  children: ReactNode
}

export const Content = React.forwardRef((props: ContentProps, ref: RefObject<HTMLElement>) => {
  let {
    children,
    ...otherProps
  } = props;
  let {styleProps} = useStyleProps({slot: 'content', ...otherProps});

  return (
    <section {...filterDOMProps(otherProps)} {...styleProps} ref={ref}>
      {children}
    </section>
  );
});
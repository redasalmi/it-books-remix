module.exports = ({ componentName, jsx }, { tpl }) => {
  return tpl`
    import type { IconsProps } from '~/types';

    export default function ${componentName}({ className }: IconsProps) {
      return (
        ${jsx}
      );
    }
  `;
};

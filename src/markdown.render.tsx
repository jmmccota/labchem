/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import { MathJax, MathJaxContext } from "better-react-mathjax";

function MarkdownRender(props: any) {
  const newProps = {
    ...props,
    remarkPlugins: [RemarkMathPlugin],
    components: {
      ...props.components,
      math: (props: any) => <MathJax>{props.value}</MathJax>,
      inlineMath: (props: any) => <MathJax inline>{props.value}</MathJax>,
    },
  };
  return (
    <MathJaxContext>
      <ReactMarkdown {...newProps} />
    </MathJaxContext>
  );
}

export default MarkdownRender;

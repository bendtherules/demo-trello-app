import { createRef, useEffect, useCallback } from "react";

// Souce - http://bdadam.com/blog/automatically-adapting-the-height-textarea.html

function adjustHeight(el, minHeight) {
  // compute the height difference which is caused by border and outline
  var outerHeight = parseInt(window.getComputedStyle(el).height, 10);
  var diff = outerHeight - el.clientHeight;

  // set the height to 0 in case of it has to be shrinked
  el.style.height = 0;

  // set the correct height
  // el.scrollHeight is the full height of the content, not just the visible part
  el.style.height = Math.max(minHeight, el.scrollHeight + diff) + "px";
}

export default function useAutoHeightTextArea(minHeight = 54) {
  const eleRef = createRef(null);
  const onChange = useCallback(() => {
    if (eleRef.current !== null) {
      adjustHeight(eleRef.current, minHeight);
    }
  }, [minHeight, eleRef]);

  useEffect(() => {
    if (eleRef.current !== null) {
      const el = eleRef.current;

      el.addEventListener("input", onChange);

      // we adjust height to the initial content
      adjustHeight(el, minHeight);

      return () => {
        el.removeEventListener("input", onChange);
      };
    }
  });

  return eleRef;
}

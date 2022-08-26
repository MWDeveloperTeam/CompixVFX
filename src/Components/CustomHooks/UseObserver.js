import { useMemo, useState, useEffect } from "react";

const UseObserver = (options, refrence) => {
  const [isVisible, setIsVisible] = useState(false);

  const observerFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerFunction, optionsMemo);
    const currentTarget = refrence.current;
    if (refrence) observer.observe(currentTarget);
    return () => {
      if (refrence) observer.unobserve(currentTarget);
    };
  }, [optionsMemo, refrence]);
  return isVisible;
};

export default UseObserver;

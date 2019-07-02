import { useState, useEffect } from 'react';
import mailcheck from 'mailcheck';

type TSuggestion = {
  address: string;
  domain: string;
  full: string;
};

type TOptions = {
  email: string;
  domainThreshold?: number;
  topLevelThreshold?: number;
  domains?: string[];
  topLevelDomains?: string[];
  secondLevelDomains?: string[];
  distanceFunction?(s1: string, s2: string): number;
};

function useMailCheck({
  email,
  domainThreshold,
  topLevelThreshold,
  domains,
  topLevelDomains,
  secondLevelDomains,
  distanceFunction,
}: TOptions) {
  const [suggestion, setSuggestion] = useState<TSuggestion | null>(null);

  useEffect(() => {
    mailcheck.domainThreshold = domainThreshold || mailcheck.domainThreshold;
    mailcheck.topLevelThreshold = topLevelThreshold || mailcheck.topLevelThreshold;

    mailcheck.run({
      email,
      domains,
      topLevelDomains,
      secondLevelDomains,
      distanceFunction,
      suggested: setSuggestion,
      empty: () => {
        setSuggestion(null);
      },
    });
  }, [
    email,
    domainThreshold,
    topLevelThreshold,
    setSuggestion,
    distanceFunction,
    domains,
    secondLevelDomains,
    topLevelDomains,
  ]);

  return suggestion;
}

export { useMailCheck };

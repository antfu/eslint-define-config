import type { CommaDangleRule } from './comma-dangle';
import type { CurlyRule } from './curly';
import type { GroupedAccessorPairsRule } from './grouped-accessor-pairs';
import type { LinebreakStyleRule } from './linebreak-style';
import type { NoCaseDeclarationsRule } from './no-case-declarations';
import type { NoDebuggerRule } from './no-debugger';
import type { QuotesRule } from './quotes';
import type { SemiRule } from './semi';

/**
 * All eslint rules.
 */
export type EslintRules = CommaDangleRule &
  CurlyRule &
  GroupedAccessorPairsRule &
  LinebreakStyleRule &
  NoCaseDeclarationsRule &
  NoDebuggerRule &
  QuotesRule &
  SemiRule;

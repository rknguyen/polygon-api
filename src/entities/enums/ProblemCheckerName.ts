export enum ProblemCheckerName {
  lcmp = 'std::lcmp.cpp', // Lines, ignores whitespaces
  ncmp = 'std::ncmp.cpp', // Single or more int64, ignores whitespaces
  fcmp = 'std::fcmp.cpp', // Lines, doesn't ignore whitespaces
  wcmp = 'std::wcmp.cpp', // Sequence of tokens
  yesno = 'std::yesno.cpp', // Single yes or no, case insensetive
  rcmp4 = 'std::rcmp4.cpp', // Single or more double, max any error 1E-4
  rcmp6 = 'std::rcmp6.cpp', // Single or more double, max any error 1E-6
  rcmp9 = 'std::rcmp9.cpp', // Single or more double, max any error 1E-9
  nyesno = 'std::nyesno.cpp' // Zero or more yes/no, case insensetive
}

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/*
    https?              =>          http || https
    :\/\                =>          ://
    (?:[-\w]+\.)?       =>          (:[- any number of words])  || not
    ([-\w]+)            =>          ([-characterOfWord] repeated ok)
    \.\w+               =>          .any number of words
    (?:\.\w+)?          =>          (:.any number of words) could be there or not
    \/?.*               =>          /could be there or not  .* could be there or not
*/
[![CircleCI](https://circleci.com/gh/sepalang/testpad/tree/master.svg?style=shield)](https://circleci.com/gh/sepalang/testpad/tree/master)
[![Greenkeeper badge](https://badges.greenkeeper.io/sepalang/testpad.svg)](https://greenkeeper.io/)

# testpad
Interactive test cli

### Test
spec.js 나 test.js로 파일 이름이 끝나는 파일을 jest를 이용하여 테스트합니다.
```
testpad sample/src

### Multi path
```
testpad 'test/multi/one test/multi/two'
#or
testpad 'test/multi/one, test/multi/two'
```


#verbose
testpad sample/src --verbose
```

### open coverage report in browser
```
testpad sample/src --open
```
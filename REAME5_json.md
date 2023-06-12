
![image](https://github.com/understanding963852/react_basic/assets/60366769/1303144d-a032-4ec8-9e99-82fea87b03d5)

    npm i json-server
  
  # db.json 파일 만들기
 ![image](https://github.com/understanding963852/react_basic/assets/60366769/857146fe-cb5d-42d6-8f36-cbe04a009085)
 
 # db.json파일은 root에 만들어야한다  
 ![image](https://github.com/understanding963852/react_basic/assets/60366769/de3b4fef-b2b9-496b-b15a-10007eb222ec)
 
 # db.json 실행하기
 ![image](https://github.com/understanding963852/react_basic/assets/60366769/5ace647b-955c-4c4c-a8bd-928246cf4dc6)
 
 # 위와 같이 실행하면 port를 3000번을 사용하기 때문에 react와 중복이 되어버린다.
 # 그래서 port를 변경해 주어야 한다
 
        json-server --watch db.json --port 3004
        
# 혹 실행이 안된다면 아래를 적용한다         

        npx json-server --watch db.json --port 3004
 




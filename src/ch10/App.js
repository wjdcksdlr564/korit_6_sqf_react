function App() {
    

    return <>
        {/* 
            1. 입력후에 엔터를 입력하면 다음 input 으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 배열에 user객체 추가 
                그리고 input value들 초기화
        */}
        <input name="username" placeholder="사용자명" />
        <input name="password" placeholder="비밀번호" />
        <input name="name" placeholder="이름" />

        {/* 
            3. tbody -> tr묶음을 userList에서 map통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb;
        */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                </tr>
            </tbody>
        </table>
    </>
}

export default App;
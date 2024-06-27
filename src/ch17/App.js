/** @jsxImportSource @emotion/react */
import * as s from "./style";

function App() {
    let widthValue = "100px";

    return (
        <div css={s.scontainer(400)}>
            <div css={s.container2}>
                <div css={s.container3}>
                    <button type="push">눌러</button>
                </div>
            </div>
        </div>
    );
}

export default App;
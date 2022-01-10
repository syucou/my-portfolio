import React from 'react';

export default function ContextProfile(){
    return(
        <div>
            <article>
                <h3 style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    paddingLeft: "15px"
                }}><strong>{"ねずみ　/　nezumi"}</strong></h3>
                <p style={{
                    textAlign: "center",
                    paddingTop: "10px",
                    paddingLeft: "15px"
                }}>
                {"1994年生まれ"}<br/>
                {"中国蘇州市出身"}<br/>
                {"WEB デザイナー"}<br/>
                {"WEB エンジニア"}
                </p>
                <p style={{
                    paddingTop: "10px",
                    paddingLeft: "25px"
                }}>
                {"学生時代バイトが大好きだったという。"}<br/>
                {"大学ではメディアを専攻し、短編映画を撮った経験がある。"}<br/>
                {"その後、大学院に入ってパソコンをゴリゴリ勉強し、Bootstrapなど様々な知識を身につけた。"}<br/><br/>
                {"2021年就職後、WordPressを使って会社のホームページのデザインを直し、JSPで工場の部品画面などを作成した経験がある。"}<br/>
                {"趣味は絵描くこととビデオ編集。"}
                </p>
            </article>
        </div>
    );
}
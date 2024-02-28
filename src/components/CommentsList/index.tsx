import { FC } from 'react';
import { Comment, List, Tooltip } from 'antd';
import Title from 'antd/lib/typography/Title';

export const CommentsList: FC = () => {
    const data = [
        {
            avatar: (
                <>
                    <img src='https://images.unsplash.com/photo-1706213048664-505fd6a7a59b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTE0NTMzNg&ixlib=rb-4.0.3&q=80&w=300' />
                    <h6>sdlkf</h6>
                </>
            ),
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality
                    design resources (Sketch and Axure), to help people create their product
                    prototypes beautifully and efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title='2016-11-22 11:22:33'>
                    <span>8 hours ago</span>
                </Tooltip>
            ),
        },
        {
            avatar: (
                <>
                    <img src='https://images.unsplash.com/photo-1706213048664-505fd6a7a59b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTE0NTMzNg&ixlib=rb-4.0.3&q=80&w=300' />
                    <h6>sdlkf</h6>
                </>
            ),
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality
                    design resources (Sketch and Axure), to help people create their product
                    prototypes beautifully and efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title='2016-11-22 10:22:33'>
                    <span>9 hours ago</span>
                </Tooltip>
            ),
        },
    ];

    return (
        <List
            itemLayout='horizontal'
            dataSource={data}
            renderItem={(item) => (
                <li>
                    <Comment
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                    />
                </li>
            )}
        />
    );
};

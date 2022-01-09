import { List, Avatar } from 'antd';

const data = [
  {
    title: 'nezumiのポートフォリオサイト開設',
    description: 'Nezumi portfolio site was opened. In 2022, I wish i can be a better web designer.',
  },
  {
    title: 'サブページ鋭意作成中',
    description: 'upcoming...',
  },
];

export default function AntList() {
    return (
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<img src={`${process.env.PUBLIC_URL}/icons/nezumi.png`} className="nezumi-icon" alt="nezumi"/>}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
    );
}
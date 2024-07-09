import { Button, Card, List } from "antd";

const applications = () => {
    const data = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
      ];
    return (
        <>
            <main className="maintainer ">
                {data.length ? (
                    <> what
                        <List
                            renderItem={(item, index) => {
                                const node = (
                                    <>what</>
                                );
                                return node;
                            }}
                        ></List>
                        </>
                    ) : (
                        <Card className="flex items-center justify-center h-full text-center">
                            <div>
                                <img src="/assets/empty@2x.png" alt="" className="w-[96px] h-[96px] mb-[24px]" />
                                    <h2 className="text-[20px] mb-[8px]">创建应用</h2>
                                    <p className="text-base text-color-333 mb-[24px]">点击创建应用选择适合你的应用</p>
                                    <Button type="primary" onClick={() => {console.log('what')}}>
                                +创建应用
                                </Button>
                            </div>
                        </Card>
                    )}
            </main>
        </>
    )
}

export default applications
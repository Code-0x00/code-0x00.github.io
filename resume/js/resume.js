(
function () {
    var app = new Vue(
    {
        el: '#app',
        data: {
            name: '肖浩泉',
            job: '计算机视觉',
            params: [
            {
            key: "性别：",
            value: "男",
            }, {
            key: "本科",
            value: "2016届 浙江工业大学 电子科学与技术",
            }, {
            key: "电话：",
            value: "157 5717 1201"
            }, {
            key: "硕士",
            value: "2019届 浙江工业大学 控制科学与工程",
            }, {
            key: "邮箱：",
            value: "kmsj0x00@163.com"
            }, {
            key: "Gmail：",
            value: "yohoho233@gmail.com",
            }, {
            key: "个人博客：",
            value: "https://blog.csdn.net/kmsj0x00",
            href: true
            }, {
            key: "Github：",
            value: "https://github.com/Code-0x00",
            href: true
            }
            ],
            skills: [
            {
                name: "机器学习与计算机视觉",
                desc: [
                    "熟悉<b>Active Learning、Co-Training、Collaborative learning</b>的原理。",
                    "熟悉人工神经网络、<b>CNN、RNN、GAN</b>和<b>Capsule</b>的原理和实现方法。",
                    "熟悉<b>数字图像处理</b>的原理和实现方法。",
                    "熟练使用<b>CAFFE、TensorFlow、PyTorch</b>搭建深度学习模型。",
                    "熟练使用<b>Python、C/C++</b>在<b>Windows/Linux</b>环境下编程。",
                    "熟练使用<b>OpenCV</b>处理数字图像。",
                    "掌握几种聚类算法的原理和应用。",
                    "掌握SVM算法的原理和应用。",
                    "了解集成学习、强化学习、增量学习、稀疏学习。",
                    "了解半监督学习、直推学习。",
                    "了解word2vec的原理。"
                ]
                },
                {
                name: "其它",
                desc: [
                    "良好的开发习惯，对于代码安全、规范、可靠性和可扩展性有一定的自我要求。",
                    "熟悉<b>正则表达式</b>，有过Python<b>爬虫</b>的经验，爬取过Baidu、Sogou、Bing、Google、Yahoo等搜索引擎，<br>&emsp;&emsp;&ensp;以及Flickr、Instagram、腾讯漫画、梦幻西游藏宝阁、贝壳网等。",
                    "熟悉在Windows、CentOS、Ubuntu、Debian下工作。",
                    "熟悉<b>Git</b>版本控制，具有良好的沟通写作能力。",
                    "了解MFC、QT/PyQT、Windows API的使用方法。",
                    "了解一些逆向工程的原理和方法。",
                    "了解Sqlite的使用。",
                    "了解HTML和JavaScript的使用。",
                    "了解Flask、Tornado、Apache和Tomcat的使用。",
                    "使用Jekyll搭建个人网站。",
                ]
                }
            ],
            works: [
                {
                name: "杭州海康威视数字技术股份有限公司",
                desc: [
                    "<span class='work-years-range'>2015.7 - 2016.10</span>  Android开发工程师",
                    "<span class='work-years-range'>2016.10 - 至今</span>   Web前端开发工程师",
                ]
                },
            ],
            projects: [
                {
                name: "肌肤管家",
                abstract: "一个智能的图像分析系统。基于自然光、紫外光和偏振光下皮肤的高清图像对皮肤质量进行评估，根据毛孔、皱纹、粉刺、黑头、色斑、晒斑、血丝、肤色等多个指标分析用户的皮肤情况，并构建用户画像。",
                desc: [
                    "算法：目标检测、语义分割、多标签学习、少样本学习",
                    "工具：OpenCV + TensorFlow + OpenCV + Flask + Tornado",
                    "利用Faster R-CNN检测毛孔信息。",
                    "利用全卷积网络分割粉刺、黑头、晒斑、色斑和血丝。",
                    "利用GLCM实现皱纹严重程度的评估。",
                    "利用Multi-Task CNN实现多任务的等级评估。",
                    "利用tornado搭建后台服务。",
                    "利用flask提供页面展示。"
                ]
                },
                {
                name: "在线学习的图像分类系统",
                abstract: "一个可以提交分类任务并得到一个图像分类接口的网页。算法根据用户提交的任务自动爬取数据并训练生成图像分类器。",
                desc: [
                    "算法：主动学习、半监督学习、弱标签学习",
                    "工具：Python + CAFFE + Flask + Tornado + Sqlite",
                    "使用CAFFE搭建VGG16模型并用预训练的模型初始化参数，提供待训练的Python接口。",
                    "Python搭建爬虫系统，可以实时根据关键词在Baidu、Bing、Google等搜索引擎爬取相关图片，并将图片列表存储到Sqlite。",
                    "利用Active Learning的方法训练图像分类器，并提供分类接口。",
                    "Tornado 搭建异步加载的后台服务，给不同用户分配cookie同时布置爬虫和训练任务。",
                    "Flask提供前端的展示。"
                ]
                },
                {
                name: "道狗",
                abstract: "这是一款面向宠物主和宠物爱好者的手机APP，提供了宠物品种识别的功能，此外还提供定位宠物位置防走失（结合智能宠物项圈）、宠物爱好者交流圈、宠物买卖等功能。",
                desc: [
                    "工具：CAFFE + Tornado",
                    "本人于此项目中负责开发图像识别算法的接口，不参与其它的开发工作。",
                    "使用Oxford Pets 和Stanford Dogs Dataset数据作为基础数据集。",
                    "使用网络爬虫在搜索引擎上爬取图像扩充数据集。",
                    "使用CAFFE训练AlexNet生成图像分类器。",
                    "Tornado搭建后台程序。"
                ]
                },
                {
                name: "IVSN Group网站开发",
                abstract: "实验室主页（IVSN）的开发。 线上地址：<a href=\"http://www.ivsn-group.com/\">http://www.ivsn-group.com/</a>。",
                desc: [
                    "工具：CentOS + Tomcat + HTML + JavaScript",
                    "在阿里云服务器（CentOS）部署Tomcat。",
                    "使用HTML+CSS设置页面分布。",
                    "使用JavaScript实现信息的加载。"
                ]
                },
                {
                name: "基于树叶图像的树种识别系统",
                abstract: "根据一张树叶的图像，通过轮廓和纹理特征返回数据库中与之最匹配的树种名称，数据库共包含184种植物。",
                desc: [
                    "算法：GLCM、EM、SVM、数字图像处理",
                    "工具：OpenCV + svmlib + MFC",
                    "利用OpenCV实现图像的预处理，EM算法分离前景背景，计算树叶图像的轮廓信息。",
                    "利用GLCM表达图像的纹理信息。",
                    "利用SVM实现图像分类。"
                ]
                },
                {
                name: "电子设计竞赛之风力摆",
                abstract: "设计一个风机驱动的单摆控制程序，使单摆末端（带有激光笔）画出指定的轨迹如：圆、椭圆、倾斜指定度角的直线等。",
                desc: [
                    "技术要点：将单摆的运动分解为在笛卡尔坐标系x、y轴上两个独立的周期运动。",
                    "利用陀螺仪、电子罗盘等传感器获取单摆状态。",
                    "利用卡尔曼滤波计算单摆的精确状态。",
                    "用PID算法控制单摆运动。"
                ]
                },
                {
                name: "飞思卡尔智能车竞赛",
                abstract: "基于摄像头自动寻路、单片机控制的四驱车竞速比赛。",
                desc: [
                    "技术要点：启发式的赛道识别算法和PID控制算法。"
                ]
                }
            ],
            footer: "感谢您宝贵的时间，希望可以得到您的肯定",
            hyperlink: "http://www.ivsn-group.com/xhq/resume/",
        },
    }
    )
}
)
();
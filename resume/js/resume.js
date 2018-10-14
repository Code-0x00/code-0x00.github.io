(
function () {
    var app = new Vue(
    {
        el: '#app',
        data: {
            version:'1.3.0',
            name: '肖浩泉',
            job: '计算机视觉',
            params: [
            {
            key: "性别：",
            value: "男",
            }, {
            key: "硕士",
            value: "浙江工业大学 控制科学与工程 2019届",
            }, {
            key: "电话：",
            value: "157 5717 1201"
            }, {
            key: "本科",
            value: "浙江工业大学 电子科学与技术 2016届",
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
                name: "理论知识",
                desc: [
                    "熟悉经典的数字图像处理方法。",
                    "熟悉经典的CNN分类网络和目标检测网络。",
                    "了解Active Learning、Co-Training、Collaborative learning等机器学习方法。",
                    "了解EM、SVM和经典的聚类算法。",
                ]
                },
                {
                name: "实践经历",
                desc: [
                    "良好的开发习惯，对于代码安全、规范、可靠性和可扩展性有一定的自我要求。",
                    "熟悉Git版本控制，具有良好的沟通写作能力。",
                    "熟练使用CAFFE、TensorFlow、PyTorch搭建深度学习模型。",
                    "熟练使用OpenCV处理数字图像。",
                    "熟悉正则表达式、Python爬虫和Sqlite的使用，有过Baidu、Sogou、Bing、Google、Yahoo、<br>&emsp;&emsp;&ensp;Flickr、Instagram、腾讯漫画、梦幻西游藏宝阁、贝壳网、巨潮资讯网等数据的爬虫经验。",
                    "熟练使用Python、C/C++在Windows/Linux环境下编程。",
                    "熟悉在Windows、CentOS、Ubuntu、Debian下工作。",
                ]
                }
            ],
            works: [
                {
                name: "智慧视通科技有限公司",
                desc: [
                    "<span class='work-years-range'>2018.9 -  至今</span>算法工程师（实习）",
                    "负责基于监控视频的行人检测和跟踪算法研究；负责深度学习框架的部署和行人重检测算法的研究",
                ]
                },
            ],
            rewards:[
            {
                name:"奖学金",
                desc:[
                "<span class='work-years-range'>2018</span>浙江工业大学信息工程学院一等学业奖学金",
                "<span class='work-years-range'>2018</span>浙江工业大学信息工程学院单项奖学金",
                "<span class='work-years-range'>2017</span>浙江工业大学信息工程学院二等学业奖学金",
                "<span class='work-years-range'>2017</span>浙江工业大学信息工程学院单项奖学金",
                ]
                }
            ],
            Research:[
            {
                name:"学术成果",
                desc:[
                "在 IEEE ACCESS 发表论文<br>&emsp;&emsp;&ensp;《Evolving Convolutional Neural Network and Its Application in Fine-Grained Visual Categorization》，<br>&emsp;&emsp;&ensp;结合网络爬虫和Active Learning算法实现了一个半监督的CNN训练方法，引入“类间相似度”以提高弱标<br>&emsp;&emsp;&ensp;签数据的利用率，最后在CIFAR-10、Oxford Pet Ⅲ和（自定义的数据集）Chinese Food上都获得了良好<br>&emsp;&emsp;&ensp;的表现。",
                "发明专利 6 篇",
                "软著 1 篇"
                ]
            }
            ],
            projects: [
                {
                name: "肌肤管家",
                abstract: "一个智能的图像分析系统。基于自然光、紫外光和偏振光下皮肤的高清图像对皮肤质量进行评估，根据毛孔、皱纹、粉刺、黑头、色斑、晒斑、血丝、肤色等多个指标分析用户的皮肤情况，并构建用户画像。",
                desc: [
                    "算法：目标检测、语义分割、多标签学习、少样本学习",
                    "产出：专利二篇 + 半自动的图像标注系统 + 客户端 + 展示网页 + 后台服务 + 分析模型",
                    "工具：OpenCV + TensorFlow + Flask + Tornado + PyQt",
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
                    "产出：专利三篇 + 在线的可学习的图像分类系统",
                    "工具：Python + CAFFE + Flask + Tornado + Sqlite",
                    "使用CAFFE搭建VGG16模型并用预训练的模型初始化参数，提供待训练的Python接口。",
                    "Python搭建爬虫系统，可以实时根据关键词在Baidu、Bing、Google等搜索引擎爬取相关图<br>&emsp;&emsp;&ensp;片，并将图片列表存储到Sqlite。",
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
                    "产出：软著一篇 + Windows客户端 + 图像识别模型",
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
                    "成绩：省三等奖。",
                    "利用陀螺仪、电子罗盘等传感器获取单摆状态。",
                    "利用卡尔曼滤波计算单摆的精确状态。",
                    "用PID算法控制单摆运动。"
                ]
                },
                {
                name: "飞思卡尔智能车竞赛",
                abstract: "基于摄像头自动寻路、单片机控制的四驱车竞速比赛。",
                desc: [
                    "技术要点：PID控制算法和启发式的赛道识别算法。",
                    "成绩：省二等奖。"
                ]
                }
            ],
            footer: "感谢您宝贵的时间，希望可以得到您的肯定",
            hyperlink: "https://code-0x00.github.io/resume/",
        },
    }
    )
}
)
();

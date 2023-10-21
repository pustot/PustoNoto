#include <iostream>
#include <string>
#include <unordered_map>

void newNewShiping() {
    std::string py;
    std::cout << "输入拼音（声调1234，支持轻声0）（示例：tou2 fa0）（按回车结束）：" << std::endl;
    getline(std::cin, py);
    getline(std::cin, py);
    std::string shiping;
    std::unordered_map<std::string, std::string> toneM = {
        {"1", "55"}, {"2", "42"}, {"3", "22"}, {"4", "21"}, {"0", "55"}
    };
    std::unordered_map<std::string, std::string> pronM = {
        {"ou", "ei"}, {"u", "i"}
    };
    for (int i = 0; i < py.size(); i++) {
        if (toneM.count(py.substr(i, 1)))
            shiping += toneM[py.substr(i, 1)];
        else if (i < py.size() - 1 && pronM.count(py.substr(i, 2))) {
            shiping += pronM[py.substr(i, 2)];
            i++;
        } else if (i < py.size() - 1 && pronM.count(py.substr(i, 1)))
            shiping += pronM[py.substr(i, 1)];
        else
            shiping += py[i];
    }
    std::cout << shiping << std::endl;
}

int main()
{
    std::cout << "Hello World! 来自朵牛" <<std::endl;
    std::cout << "请选择要进入的功能（按回车结束）：" << std::endl;
    std::cout << "1 猩猩派普化石屏话模拟" << std::endl;
    int selectedOption = 0;
    std::cin >> selectedOption;
    if (selectedOption == 1) {
        newNewShiping();
    }
}

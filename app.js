/*
	Дан произвольный url - 
	'https://purpleschool.ru/course/javascript'
	Нужно сделать функцию, которая выводит в консоль:
	- Протокол (https)
	- Доменное имя (purpleschool.ru)
	- Путь внутри сайта (/course/javascript)
*/

let url = 'https://purpleschool.ru/course/javascript';

function parser(url) {
    let [protocol, _,domain, ...source] = url.split('/');
    console.log(protocol, domain, ...source);
    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Доменное имя: ${domain}`);
    console.log(`Путь внутри сайта: /${source.join('/')}`);
}

parser(url);
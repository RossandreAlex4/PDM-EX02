import {Item} from '../models/Item';

class Service {
    private items: Item[] = [
        {id: '1', name: 'Homem Aranha'},
        {id: '2', name: 'Pacificador'},
    ];

    getAllItems(): Item[]{
        return this.items;
    }

    addItems(name:string): string{
        
        if(name.trim().length < 2){
            return "nome_curto";
        }

        const existe = this.items.find(
            item => item.name.toLowerCase() === name.toLowerCase()
        );

        if (existe){
            return "nome_repetido";
            
        } 

        const novoItem: Item = {
            id: Date.now().toString(),
            name: name,
        };
        this.items.push(novoItem);
        return 'sucesso';

    }

    removeItem(id: string): void{
        this.items = this.items.filter(item => item.id !== id);
    }
}


export default new Service();
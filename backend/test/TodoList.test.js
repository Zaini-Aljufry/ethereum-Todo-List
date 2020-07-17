const TodoList = artifacts.require('./TodoList.sol')

contract('TodoList',(accounts)=>{
    before(async ()=>{
        this.todoList = await TodoList.deployed()
    })

    it('should deplooys successfully', async() =>{
        const address = await this.todoList.address
        assert.notEqual(address,0x0||''||null||undefined)
    })

    it('should list tasks', async()=>{
        const taskCount = await this.todoList.taskCount()
        const task = await this.todoList.tasks(taskCount)
        assert.equal(task.id.toNumber(),taskCount.toNumber())
        assert.equal(task.content,'Learn Blockchain seriously')
        assert.equal(task.completed,false)

    })

})
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

    it('should be able to create task', async() =>{
        const result = await this.todoList.createTask('And connect it to react')
        const taskCount = await this.todoList.taskCount()
        assert.equal(taskCount,2)
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(),2)
        assert.equal(event.content,'And connect it to react')
        assert.equal(event.completed,false)
    })

    it('should be able to toggle completed',async () =>{
        const result = await this.todoList.toggleCompleted(1)
        const task = await this.todoList.tasks(1)
        assert.equal( task.completed,true)
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(),1)
        assert.equal(event.completed,true)

    })

})
KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('depatureie6', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/depatureie6/1.0/']});
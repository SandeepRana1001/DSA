const execute = (root) => {

    console.log('Root')
    console.log(root)
    console.log('\n\n')


    if (root == null) {
        return null;
    }

    if (root.left == null && root.right == null) {
        return null;
    }

    // Else recursively delete in left and right
    // subtrees.
    root.left = execute(root.left);
    root.right = execute(root.right);

    return root;
}


exports.execute = execute